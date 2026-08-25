# Discord Slash Command Bot

A ready-to-deploy Discord bot with slash commands only (no Message Content Intent needed).

## Features

### Utility
- `/ping` - Check bot latency
- `/serverinfo` - Server information
- `/userinfo` - User information
- `/avatar` - Show someone's avatar
- `/membercount` - Show member count
- `/invite` - Get bot invite link
- `/help` - List all commands

### Games & Fun
- `/coinflip` - Flip a coin
- `/dice` - Roll a dice
- `/rps` - Rock Paper Scissors
- `/8ball` - Magic 8-ball
- `/joke` - Random joke

### Hangout & Events
- `/chill` - Start chill vibes
- `/hangout` - Looking for people to hang out
- `/event` - Announce an event

### Roles
- `/roleinfo` - Get info about a role

### Music
- `/play` - Basic music request (placeholder – can be upgraded to full music bot)

## Deploy on Railway

1. Download and unzip this folder
2. Go to railway.app → New Project → Deploy from local directory
3. Add these Variables:

   - `DISCORD_TOKEN` → Your bot token
   - `CLIENT_ID` → Your Application ID

4. Deploy

## Invite Link

Replace `YOUR_CLIENT_ID` with your real Client ID:

https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
