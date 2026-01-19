// Componente encargado de mostrar la imagen de avatar del usuario
// - Realiza una petición a la API de GitHub para obtener `avatar_url`
// - Guarda la URL en el store mediante `setImage`
// - Renderiza la etiqueta <img> con el `src` obtenido
import { useEffect } from 'react'
import '/home/theking/Programacion/React/Digital Presentation/src/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../features/imageSlice_1'



const Image = ({ user }: { user?: string }) => {

    // Selector: leemos la URL de la imagen desde el slice `image_1`
    // NOTA: aquí se usa `any` para simplicidad; tipar con `RootState` es recomendable
    const image = useSelector((state: any) => state.image_1.value)
    const dispatch = useDispatch()

    // Efecto: cuando se monta (y si `user` está definido) hace fetch al endpoint
    // de GitHub para obtener datos del usuario y guardar `avatar_url` en el store.
    useEffect(() => {
        const callImage = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${user}`)
                if (response.ok) {
                    const data = await response.json()
                    // Guardamos la URL del avatar en el slice
                    dispatch(setImage(data.avatar_url))
                }
            } catch (error) {
                console.error('Error en la imagen: ' + error)
            }
        }
        if (user) callImage()
    }, [])

    // Renderizado: mostramos la imagen si existe la URL
    return (
        <div className='flex items-center justify-center'>
            <img className='rounded-[100%] size-30' src={image} alt='Imagen de Ava' />
        </div>
    )
}

export default Image