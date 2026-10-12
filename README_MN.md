# Gastro Catering — GitHub + Supabase + Vercel

Энэ төсөл нь **Gastro Catering LLC / Гастро Катеринг ХХК**-ийн нэг хуудаст танилцуулгын веб сайт.

## Юу бэлэн байгаа вэ?

- Responsive desktop + mobile дизайн
- Gastro Catering үндсэн лого
- Gastro Fresh хэсэг
- Катеринг, буфет, кофе завсарлагын үйлчилгээ
- Жишиг меню, үнэ
- Gastro Fresh бүтээгдэхүүн ба худалдаалах цэгүүд
- 12 түгээмэл асуулт
- Үнийн санал авах хүсэлтийн форм
- Supabase database-д хүсэлт хадгалах API
- Vercel дээр шууд deploy хийх бүтэц

## 1. GitHub-д оруулах

1. GitHub → **New repository**
2. Нэр: `gastro-catering-web`
3. Энэ хавтасны бүх файлыг repository руу upload / push хийнэ.

## 2. Supabase үүсгэх

1. Supabase дээр шинэ project үүсгэнэ.
2. **SQL Editor** нээнэ.
3. `supabase/schema.sql` файлын бүх SQL-ийг хуулж Run хийнэ.
4. **Project Settings → API** хэсгээс дараах 2 утгыг авна:
   - Project URL
   - `service_role` key

> `service_role` key-г GitHub кодонд хэзээ ч бичиж болохгүй. Зөвхөн Vercel Environment Variables-д хадгална.

## 3. Vercel дээр deploy хийх

1. Vercel → Add New → Project
2. GitHub repository `gastro-catering-web`-ээ сонгоно.
3. Framework preset: **Other** / Build command шаардлагагүй.
4. Deploy хийнэ.

Дараа нь Vercel Project → **Settings → Environment Variables**:

- `SUPABASE_URL` = Supabase Project URL
- `SUPABASE_SERVICE_ROLE_KEY` = Supabase service_role key

Environment: Production, Preview, Development-д хэрэгтэйгээр сонгоно.

Environment Variables нэмсний дараа **Redeploy** хийнэ.

## 4. Форм шалгах

Сайт дээр “Үнийн санал авах” форм бөглөж илгээнэ.
Supabase → Table Editor → `inquiries` хүснэгтэд шинэ мөр нэмэгдсэн эсэхийг шалгана.

## 5. Домэйн холбох (сонголттой)

Vercel → Project → Settings → Domains хэсэгт өөрийн `.mn` / `.com` домэйныг холбоно.
Домэйн байхгүй бол Vercel-ийн үнэгүй `*.vercel.app` хаягаар сайт шууд ажиллана.

## Контент шинэчлэх

- Текст: `index.html`
- Өнгө, дизайн: `styles.css`
- Формын үйлдэл: `app.js`
- Supabase API: `api/inquiry.js`
- Зураг: `assets/`

## Одоогийн гол утас

- Катеринг: **7272 7676**
- Gastro Fresh / хамтын ажиллагаа: **9909 3259**
