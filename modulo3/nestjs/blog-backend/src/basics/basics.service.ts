import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
   
    getMyFirstGet(): object {
        return {
            service: 'Blog-Backend', 
            controller: '/basics', 
            function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return {
            service: 'Blog-Backend', 
            controller: '/basics/:parametro', 
            function: 'Get con Parámetros', 
            parametroRecibido: parametro
        }; 
    }

    postFunction(bodyPost: object): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics', // Cambié la ruta a '/basics' ya que es un POST
            function: 'Ejemplo de Petición POST', 
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics/:parametro', // Cambié la ruta para que tenga sentido
            function: 'Ejemplo de Petición PUT',
            body: bodyPost,
            parametro: parametro
        };            
    }

    deleteFunction(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics/:parametro', // Cambié la ruta para que tenga sentido
            function: 'Ejemplo de Petición DELETE',
            parametro: parametro
        };            
    }

    calculoTriangulo(body: any): object {
        const result: number = (body.base * body.altura) / 2;
        return {
            service: 'Blog-Backend',
            controller: '/calculo-area-triangulo', 
            function: 'Calculo de area  de un triangulo',
            parametro: body,
            resultado: result
        };
    }

    areaRectangulo(ancho: number, alto: number): object {
        const result: number = ancho*alto;
        return {
            service: 'Blog-Backend',
            controller:'/basics tipo delete', 
            function: 'calculo-area-rectangulo/:ancho/:alto ',
            ancho: ancho, 
            alto: alto,
            resultado: result
        };
    }
}

