# ベースイメージの設定
FROM node:14-alpine

# 作業ディレクトリの設定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json ./
COPY package-lock.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# 開発サーバーの起動
CMD ["npm", "start"]
