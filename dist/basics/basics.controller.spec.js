"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const basics_controller_1 = require("./basics.controller");
describe('BasicsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [basics_controller_1.BasicsController],
        }).compile();
        controller = module.get(basics_controller_1.BasicsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
