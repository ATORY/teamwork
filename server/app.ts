import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as sio from 'socket.io';
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

const distPath = path.resolve(__dirname, '../dist');
const index = fs.readFileSync('index.html');

router.get('/', (ctx: Koa.Context) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = index;
});

router.post('/login', (ctx: Koa.Context) => {
  ctx.body = ctx.request.body;
});

router.get('/bundle.js', (ctx: Koa.Context) => {
  ctx.set('Content-Type', 'application/javascript');
  const js = fs.readFileSync(`${distPath}/bundle.js`);
  ctx.body = js;
});

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(9090, () => {
  console.log('server start');
});

// socket
const io = sio(server);

io.on('connection', function (socket) {
  console.log('a user connected');
  // emit login
  socket.on('disconnect', function () {
    console.log('user disconnected');
    io.emit('user disconnected');
  });
});

