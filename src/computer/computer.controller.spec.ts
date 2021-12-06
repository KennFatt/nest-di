import { Test, TestingModule } from '@nestjs/testing';
import { ComputerController } from './computer.controller';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';

describe('ComputerController', () => {
  let controller: ComputerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CpuModule, DiskModule],
      controllers: [ComputerController],
    }).compile();

    controller = module.get<ComputerController>(ComputerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
