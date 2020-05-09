import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { AccountService } from './account.service';
import { Bot } from '../models/bot.model';
import { GatewayService } from './gateway.service';

@Injectable({ providedIn: 'root' })
export class BotService {


    constructor(
        public accountService: AccountService,
        public botService: BotService,
        public gatewayService: GatewayService,

    ) { }




}