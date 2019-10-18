import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../core/services/config-options.service';
import { GeneratorService } from '../../core/services/generator.service';
import { PRODUCTMETADATA } from '../../core/services/constants.service';
import { RandomCharacters, GeneratorFactory } from '../../core/services/generator.factory';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorage: LocalStorageService,
    @Optional() private configService: ConfigOptionsService,
    @Optional() @Inject(PRODUCTMETADATA) private constants: object,
    @Optional() private generatorService: GeneratorService,
    @Optional() @Inject(RandomCharacters) private token: string) { }

  ngOnInit() {
  }

}
