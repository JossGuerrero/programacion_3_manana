"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const basics_service_1 = require("./basics.service");
describe('BasicsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [basics_service_1.BasicsService],
        }).compile();
        service = module.get(basics_service_1.BasicsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
