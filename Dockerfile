# ---------- build ----------
    FROM node:23-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build           # puts the static site in /app/dist
    
    # ---------- runtime ----------
    FROM nginx:1.25-alpine
    # wipe the default html
    RUN rm -rf /usr/share/nginx/html/*
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # replace the default virtual-host with a super-light one
    RUN rm /etc/nginx/conf.d/default.conf
    COPY nginx/app.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    