module.exports = {
  name: "help",
  description: "List all commands and their descriptions",
  async execute(message) {
    const helpMessage = `
**📖 Available Commands**

⚙️ **!help**  
Muestra este mensaje de ayuda con la lista de comandos disponibles.

🏆 **!ranking**  
Muestra el top 10 de jugadores con más puntos en el servidor.

🎲 **!dado**  
Lanza un dado y te da un número aleatorio del 1 al 6. ¡El resultado suma puntos!

✂️ **!ppt**  
Juega Piedra, Papel o Tijera contra el bot.

🎭 **!roles**  
Muestra un menú con los roles disponibles configurados por un administrador.  
Puedes elegir uno para que el bot te lo asigne automáticamente.

🛠 **!roleadmin** *(solo administradores)*  
Muestra un menú con todos los roles existentes en el servidor.  
Los administradores seleccionan qué roles estarán disponibles para los miembros en **!roles**.

📢 **!setchannel** *(solo administradores)*  
Configura un canal donde el bot enviará mensajes importantes, como el ranking o anuncios.

---

👑 **Notas importantes**  
- Solo los administradores pueden usar **!roleadmin** y **!setchannel**.  
- Los roles configurados con **!roleadmin** estarán disponibles para todos los miembros con **!roles**.  
- Cada acción en los juegos (dado/ppt) suma puntos para el ranking.  

💡 **Consejo:** ¡Usa los roles para organizar clanes o equipos dentro del juego *Tiny Survivors*!  
    `;

    await message.channel.send(helpMessage);
  }
};
