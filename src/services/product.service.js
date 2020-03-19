import Network from './network.service';

class ProductService extends Network {

    create(product){
        return this.send('PUT', '/product', product, {
            'Content-Type': 'multipart/form-data'
        })

    }
    getByCategoryId(categoryId){
        return this.send('GET', `/category/${categoryId}/product`)
    }

    getById(productId){
        return this.send('GET', `/product/${productId}`)
    }

    getByIds(productIds){
        return this.send('POST', `/product/bulk`, {
            ids: productIds
        });
    }
}

export default new ProductService();