import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'qr-reader';
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];

  constructor() { }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    if (cameras.length > 0) {
      this.selectCamera(this.cameras[0].deviceId);
    }
  }

  scanSuccessHandler(event: string) {
    console.log(event);
    this.results.unshift(event);
  }

  selectCamera(deviceId: string) {
    const selectedCamera = this.cameras.find(camera => camera.deviceId === deviceId);
    if (selectedCamera) {
      this.myDevice = selectedCamera;
      console.log('Using camera: ', this.myDevice.label);
      this.scannerEnabled = true;
    } else {
      console.error('Camera not found!');
    }
  }
}
