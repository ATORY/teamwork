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


router.post('/login', (ctx: Koa.Context) => {
  ctx.body = ctx.request.body;
});

router.get('/main.css', (ctx: Koa.Context) => {
  ctx.set('Content-Type', 'text/css');
  const css = fs.readFileSync(`${distPath}/main.css`);
  ctx.body = css;
});

router.get('/bundle.js', (ctx: Koa.Context) => {
  ctx.set('Content-Type', 'application/javascript');
  const js = fs.readFileSync(`${distPath}/bundle.js`);
  ctx.body = js;
});
router.get('/bundle.js.map', (ctx: Koa.Context) => {
  // ctx.set('Content-Type', 'application/javascript');
  const js = fs.readFileSync(`${distPath}/bundle.js.map`);
  ctx.body = js;
});


router.get('/api/works', (ctx: Koa.Context) => {
  ctx.body = {
    works: [
      {
        _id: 1,
        name: 'No.1'
      },
      {
        _id: 2,
        name: 'No.2'
      },
      {
        _id: 3,
        name: 'No.3'
      },
      {
        _id: 4,
        name: 'No.4'
      },
      {
        _id: 5,
        name: 'No.5'
      },
      {
        _id: 6,
        name: 'No.6'
      },
    ],
    numbers: [
      {
        _id: 1,
        name: 'Dong 1'
      },
      {
        _id: 2,
        name: 'Dong 2'
      }]
  };
});

router.get('/*', (ctx: Koa.Context) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = index;
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

