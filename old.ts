/**
 * Create the Client
 */
function fixNextPath(anyPath){
  const re =  /\/vercel\/workpath0\/(?!node_modules)/g
  if(anyPath && re.test(anyPath)){
    console.log("Fixing Path for NextJS")
    return path.resolve(anyPath.replace('/vercel/workpath0/', './'))
  } 
  return __dirname
}
const config = {
  "generator": {
    "name": "client",
    "provider": "prisma-client-js",
    "output": "/home/will/Prisma/next-prisma/node_modules/@prisma/client",
    "binaryTargets": [
      "native",
      "rhel-openssl-1.0.x"
    ],
    "previewFeatures": [],
    "config": {}
  },
  "sqliteDatasourceOverrides": [],
  "relativePath": "../../../prisma",
  "clientVersion": "2.10.0-integration-nextjs-custom-output.24",
  "engineVersion": "77abecc4840127ebdcc02b83ee1e2c9cc27009f2"
}
config.document = dmmf
config.dirname = fixNextPath(config.generator.output)

/**
 * Build tool annotations
 * In order to make `ncc` and `node-file-trace` happy.
**/

path.join(config.dirname, 'query-engine-debian-openssl-1.1.x');
path.join(config.dirname, 'query-engine-rhel-openssl-1.0.x');

/**
 * Annotation for `node-file-trace`
**/
path.join(config.dirname, 'schema.prisma');