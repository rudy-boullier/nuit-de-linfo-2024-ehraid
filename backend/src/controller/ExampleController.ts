import {Router} from "express";
import {useExampleService} from "../services/ExampleService";

export const exampleController = Router()
const exampleService = useExampleService();

exampleController.get("/", (req, res) => {
    res.json({
        status: 200,
        message: exampleService.getHelloWorld()
    })
})