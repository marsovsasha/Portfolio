# Портфолио — Osadchuk Aleksandr

Сайт-портфолио на Next.js по дизайну из Figma.

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Деплой на Vercel

### 1. Создайте репозиторий на GitHub

```bash
cd /Users/a.osadchuk/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
```

Создайте новый репозиторий на [github.com](https://github.com/new) и выполните:

```bash
git remote add origin https://github.com/ВАШ_USERNAME/portfolio.git
git push -u origin main
```

### 2. Подключите к Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. **Add New Project** → выберите репозиторий `portfolio`
4. Нажмите **Deploy** (настройки по умолчанию подойдут)

### 3. Готово

Через 1–2 минуты получите ссылку вида:
`https://portfolio-xxx.vercel.app`

Эту ссылку можно отправлять — сайт будет доступен всем.

## Добавить своё фото

Положите файл `avatar.jpg` в папку `public/` и обновите компонент `src/components/Profile.tsx`:

```tsx
import Image from "next/image";

// Вместо div используйте:
<Image
  src="/avatar.jpg"
  alt="Osadchuk Aleksandr"
  width={60}
  height={60}
  className="object-cover w-full h-full rounded-[24px]"
/>
```
