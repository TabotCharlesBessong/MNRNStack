import { Controller } from "@nestjs/common";
import { PresenceService } from "./presence.service";
import { SharedService } from "@app/shared";
import { AuthGuard } from "@app/shared/auth.guard";
import { Ctx, MessagePattern, RmqContext } from "@nestjs/microservices";


@Controller()
export class PresenceController {
  constructor(
    private readonly presenceService: PresenceService,
    private readonly sharedService: SharedService,
    // TEMP
    private readonly authGuard: AuthGuard,
  ) {}

  @MessagePattern({ cmd: 'get-presence' })
  async getUsers(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);

    // TEMP
    console.log(123, this.authGuard.hasJwt());

    return this.presenceService.getHello();
  }
}