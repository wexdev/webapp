import asyncio
import socket
import websockets

hostIP = socket.gethostbyname(socket.gethostname())
print(hostIP)

async def hello(websocket, path):
    await websocket.send('From backend with love')
    
start_server = websockets.serve(hello, hostIP, 8848)
#start_server = websockets.serve(hello, "localhost", 8848)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
