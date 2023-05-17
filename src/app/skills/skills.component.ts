import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"JavaScript, TypeScript, JWT, RESTful API",percent:90,remark:'excellent'}, {name:"python, Java, NgRx",percent:70,remark:'good'},{name:"Angular, Bootstrap, Material UI",percent:90,remark:'excellent'},{name:"ES6, jQuery, Express.js, Nest.js, Node.js",percent:70,remark:'very-good'}, {name:"RxJS, ", percent:90,remark:'excellent'}],
    tools:[{name:"Git, JIRA, Postman",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Windows",percent:70,remark:'very-good'},{name:"MySQL, MongoDB",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:50,remark:'average'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Waterfall, Agile",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
