export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        title: data.title,
        img: data.img,
        price: data.price,
        moneda: data.moneda,
        category: data.category,
        descripcion: data.descripcion
    }

    return productAdapted
}