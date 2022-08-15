import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse (request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Eric"
    });

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Jhon"
    });
    return response.send();
}