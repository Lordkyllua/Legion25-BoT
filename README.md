# 🤖 Discord Bot Modular

Un bot para Discord que incluye:
- 🎉 Bienvenida personalizada para nuevos miembros.  
- 🏷️ Asignación de roles mediante menú interactivo (con modo admin).  
- ⭐ Sistema de puntos por actividad y ranking.  
- 🎲 Juegos simples (dados y piedra-papel-tijera).  
- ⚙️ Configuración de canales personalizados para cada función.  

---

## 🚀 Funcionalidades

### 👋 Bienvenida
Configura el canal con:
```
!setchannel bienvenida
```

### 🏷️ Roles
- `!roles admin` → Solo para admins, selecciona los roles permitidos.
- `!roles` → Muestra el menú de roles a los miembros.

### ⭐ Puntos y Ranking
```
!puntos
!ranking
```

### 🎲 Juegos
```
!dado
!ppt piedra|papel|tijera
```

---

## ☁️ Deploy en Railway

1. Sube este repositorio a GitHub.  
2. En Railway: **New Project → Deploy from GitHub repo**.  
3. Configura la variable de entorno en Railway:
```
DISCORD_TOKEN = tu_token_aqui
```

---

## 🔑 Obtener tu Token de Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications).  
2. Crea una aplicación, activa el bot y copia el token.  
3. Guárdalo como variable de entorno.

---

👨‍💻 Hecho con ❤️ para tu servidor de Discord.
