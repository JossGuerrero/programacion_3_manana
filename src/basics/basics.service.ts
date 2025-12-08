import { createParamDecorator, Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

    getMyFisrtGet(): object {
        return{
            service:'Blog-Backend',
            controller: '/basics',
            function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return{
            service:'Blog-Backend',
            controller: '/basics',
            function: 'Get con Parametros',
            parametroRecibido: parametro
        };
    }

    postFunction(bodyPost: object): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de peticion Post',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de peticion Put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }

    deleteFunction(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de peticion Delete',
            parametro: parametro
        };
    }

    calculoTriangulo(body: any): object {
        const result: number = (body.base*body.altura)/2

        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Calculo del area de un triangulo',
            parametro: body,
            resultado: result
        };
    }

    areaRectangulo(ancho: number, alto: number): object {
        const result: number = ancho * alto;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Calculo del area de un rectangulo',
            ancho: ancho,
            alto: alto,
            resultado: result
        };
    }

    calcularStock(stock:number, cantidad:number): object {
        let puedeVender: boolean = false;
        let mensaje = 'Stock suficiente';
        if (stock > cantidad){
            puedeVender = true;
            mensaje = 'Stock suficiente';
        } else {
            puedeVender = false;
            mensaje = 'Stock insuficiente';
        }

        return {
            "stock": stock,
            "cantidadSolicitada": cantidad,
            "puedeVender": puedeVender,
            "mensaje": mensaje
        }
    }

    

}
