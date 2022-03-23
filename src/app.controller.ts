import { Controller, Get } from '@nestjs/common';


import { AppService } from './app.service';
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse,
	ApiTags
} from '@nestjs/swagger';

@ApiTags('/')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
