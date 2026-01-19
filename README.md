# Digital Presentation

![Captura de la app](public/screenshot.svg)



## Tecnologías principales ✅

- **React**
- **TypeScript**
- **Vite**
- **Redux Toolkit** (slices para imagen e información)
- **React Redux**
- **Tailwind CSS**
- **lucide-react** (iconos)

## Estructura principal 🔧

- `src/App.tsx` — Componente principal que monta la tarjeta y pasa la prop `user`.
- `src/main.tsx` — Punto de entrada; envuelve la app con `Provider` (Redux).
- `src/Components/Image/Image.tsx` — Obtiene `avatar_url` desde GitHub y guarda la URL en `imageSlice`.
- `src/Components/Information/Information.tsx` — Obtiene `name`, `mail`, `location` y repositorios; actualiza `informationSlice`.
- `src/features/imageSlice_1.ts` — Slice para la URL del avatar.
- `src/features/informationSlice_1.ts` — Slice para `name`, `mail`, `location`, `numberOfProjects`.
- `src/app/store.ts` — Configuración del store y tipos `RootState` / `AppDispatch`.

## Qué incluye ✨

- Peticiones a la API pública de GitHub (`/users/:username`, `/users/:username/repos`).
- Muestra avatar y datos del perfil (nombre, número de repositorios, email, ubicación).
- Manejo de valores nulos (`email` / `location`) con fallbacks y render condicional en la UI.
- Buenas prácticas con Redux Toolkit (slices, acciones y reducers).

## Cómo ejecutar 🧪

Instala dependencias y arranca el servidor de desarrollo:

```bash
npm install
npm run dev
# o con bun
bun install
bun run dev
```

Abre `http://localhost:5173` (por defecto) y verás la tarjeta con la información del usuario configurado.

## Notas importantes ⚠️

- La API de GitHub devuelve `email` y `location` como `null` si el usuario los oculta en su perfil público. En esos casos la UI muestra `No disponible`.
- Para cambiar el usuario mostrado edita la prop `user` en `src/App.tsx` (ej.: `user={'RiverFlow96'}`).
- Si deseas más robustez, considera:
  - añadir estados de carga y error en los componentes,
  - limpiar valores del store al desmontar o al cambiar `user`,
  - añadir tests unitarios para los slices.

## Contribuir 🤝

Pull requests y issues son bienvenidos. Puedes proponer mejoras como:

- tests, placeholders visuales, o handling de casos extremos.
- documentación adicional (`CONTRIBUTING.md`).

---

¿Quieres que haga un commit con este README actualizado y la captura añadida? Puedo hacerlo y subir los cambios al remoto si lo deseas.
    Pull requests y issues son bienvenidos. Puedes proponer mejoras como:

    - tests, placeholders visuales, o handling de casos extremos.
    - documentación adicional (`CONTRIBUTING.md`).
