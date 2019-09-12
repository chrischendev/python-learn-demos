import asyncio

import websockets

# 合法的用户名
usernames = ['chen', 'chris']


async def start(websocket, path):
    while True:
        msg = await websocket.recv()
        # 判断用户名是否合法
        path_subs = path.split('/')
        ws_path = path_subs[1]
        username = path_subs[2]
        if ws_path != 'chat':
            await websocket.send('你来错了地方')
            return
        if username not in usernames:
            await websocket.send('你没有合法权限')
            return
        print(f"< {msg}")
        print(f"< {path}")
        print(type(msg))

        greeting = f"{msg}!"

        await websocket.send(greeting)
        print(f"> {greeting}")


start_server = websockets.serve(start, 'localhost', 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
