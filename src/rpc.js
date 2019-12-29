/**
 * RPC 调用
 * 和 Ajax 有什么不同点？
 * 1. 不一定使用 DNS 作为寻址服务。
 * 2. 应用层协议一般不使用 HTTP
 * 3. 基于 TCP 或 UDP 协议
 */

// RPC 调用使用二进制协议，更小的数据包体积，更快的编解码速率

const buffer1 = Buffer.from('geekbang');
const buffer2 = Buffer.from([1, 2, 3, 4]);
const buffer3 = Buffer.alloc(28);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

buffer2.writeInt8(12, 1);
console.log(buffer2);

buffer2.writeInt16BE(512, 2);
console.log(buffer2);

const fs = require('fs');
const protobuf = require('protocol-buffers');

const schema = protobuf(fs.readFileSync(__dirname + '/test.proto'), 'utf-8');
console.log(schema);

const buffer = schema.Column.encode({
    id: 1,
    name: 'Nodejs',
    price: 989.2
})

console.log(schema.Column.decode(buffer));
