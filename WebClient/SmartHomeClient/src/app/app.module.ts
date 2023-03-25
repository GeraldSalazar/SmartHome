import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraStatusInfoComponent } from './devices-status/camera-status-info/camera-status-info.component';
import { DevicesStatusComponent } from './devices-status/devices-status.component';
import { DoorsStatusInfoComponent } from './devices-status/doors-status-info/doors-status-info.component';
import { LedsStatusInfoComponent } from './devices-status/leds-status-info/leds-status-info.component';
import { CameraComponent } from './home-layout/devices/camera/camera.component';
import { DoorComponent } from './home-layout/devices/door/door.component';
import { LEDlightComponent } from './home-layout/devices/ledlight/ledlight.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginComponent } from './login/login.component';
import { AppconfigService } from './services/appconfig.service';
import { SmartHomeIndexComponent } from './smart-home-index/smart-home-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    CameraComponent,
    LEDlightComponent,
    DoorComponent,
    DevicesStatusComponent,
    LedsStatusInfoComponent,
    DoorsStatusInfoComponent,
    CameraStatusInfoComponent,
    LoginComponent,
    SmartHomeIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppconfigService],
      useFactory: (appConfigService: AppconfigService) => {
        return () => {
          return appConfigService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
