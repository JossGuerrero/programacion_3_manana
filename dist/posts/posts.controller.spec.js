"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const posts_controller_1 = require("./posts.controller");
describe('PostsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [posts_controller_1.PostsController],
        }).compile();
        controller = module.get(posts_controller_1.PostsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
