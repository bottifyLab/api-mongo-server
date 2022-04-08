import { Controller, Get } from '@nestjs/common';
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  indexPage(): string {
    return "OK";
  }
}



