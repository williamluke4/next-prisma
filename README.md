## For Testing Prisma Live Reload

After cloning the repository, you can run `yarn` to install the dependencies and then start the application with `yarn dev`.

```bash
$ git clone https://github.com/leerob/next-prisma.git
$ yarn
$ yarn dev
```

# Authentication

## .env

```env
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@example.com
```

You are now able to view the application at http://localhost:3000.

# Platform: debian-openssl-1.1.x
# NPM:
  @prisma/cli       : 2.10.0-dev.70
  @prisma/client       : 2.10.0-dev.70
# Binaries
Query Engine         : query-engine 77abecc4840127ebdcc02b83ee1e2c9cc27009f2 (at node_modules/@prisma/cli/query-engine-debian-openssl-1.1.x)
Migration Engine     : migration-engine-cli 77abecc4840127ebdcc02b83ee1e2c9cc27009f2 (at node_modules/@prisma/cli/migration-engine-debian-openssl-1.1.x)
Introspection Engine : introspection-core 77abecc4840127ebdcc02b83ee1e2c9cc27009f2 (at node_modules/@prisma/cli/introspection-engine-debian-openssl-1.1.x)
Format Binary        : prisma-fmt 77abecc4840127ebdcc02b83ee1e2c9cc27009f2 (at node_modules/@prisma/cli/prisma-fmt-debian-openssl-1.1.x)
Studio               : 0.296.0
