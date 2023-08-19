# extension_file_type
extension_file_type
# Foobar
get information about  extension File With base64 AND BufferConCat;


## for use in base64
1) first you chunks[] to concat
2) your concat datat change to toString("base64");
3) now your data chuncks should be from base64
4) call FileExtension

const chuncks = [];
1)const fileBuffer = Buffer.concat(chunks);
2)const dataBuffer = fileBuffer.toString("base64");
3)const buffer = Buffer.from(dataBuffer,"base64")
4)const fileExtension = new FileExtension().bAse64(buffer);
## Usag

```nodejs
import { Request, Response } from "express";

# returns 'fileExtension'
let totalSize = 0;
const maxChunkSize = 1024 * 1024 * 1024; // Maximum chunk size (1G)
let chunks: any = [];
req.on("data", (chunk: Buffer) => {
      totalSize += chunk.length;
      chunks.push(chunk);
    });

req.on("end", async () => {
    const concat = Buffer.concat(chunks).toString("base64");
    const buffer = Buffer.from(dataBuffer,"base64")
          let fileExtension = new FileExtension().bAse64(buffer);
          console.log(fileExtension)
});


## Contributing
## for use Hex
just you send chuncks concat

1)const fileBuffer = Buffer.concat(chunks);
2)const fileExtension = new FileExtension().hEx(fileBuffer);
## Usag

```nodejs
import { Request, Response } from "express";

# returns 'fileExtension'
let totalSize = 0;
const maxChunkSize = 1024 * 1024 * 1024; // Maximum chunk size (1G)
let chunks: any = [];
req.on("data", (chunk: Buffer) => {
      totalSize += chunk.length;
      chunks.push(chunk);
    });

req.on("end", async () => {
          let fileExtension = new FileExtension().hEx(Buffer.concat(chunks));
          console.log(fileExtension)
});