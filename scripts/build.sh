#!/bin/bash

rm -rf ./.svelte-kit
rm -rf ./.vercel_build_output

cd studio || exit
pnpm run build

cd .. || exit

rm -rf ./web/static/studio
mv ./studio/dist ./web/static/studio

cd web || exit
pnpm run build

cd .. || exit
cp -r ./web/.svelte-kit .
cp -r ./web/.vercel_build_output .
