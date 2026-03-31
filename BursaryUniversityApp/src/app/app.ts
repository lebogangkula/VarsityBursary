import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UniversityApplication');
  router: any;

  private sanitizer = inject(DomSanitizer);
  /**
   *
   */
 /**
  *
  */
 constructor(router:Router) {
  
 }
  
  
  vasReqLink: string  = "https://www.youtube.com/embed/";
  
OrientVarsity: SafeResourceUrl | null = null;
  RequestVarsity: SafeResourceUrl | null = null;
  firstSub: boolean = false;
  secondVarsities: boolean = true;
  thirdApply: boolean = true;
currentBursaryLink: string | null = null;
currentApply: string | null = null;
varsityName: string = "";
startDate: Date = new Date(2026, 4, 1); 

applicationMap: { [key: string]: string } = {
  // Western Cape
  "Cape Peninsula University of Technology": "https://www.cput.ac.za/study/apply",
  "University of Cape Town": "https://applyonline.uct.ac.za",
  "University of the Western Cape": "https://www.uwc.ac.za/study/apply",
  "Stellenbosch University": "https://student.sun.ac.za/apply",

  // KwaZulu-Natal
  "Durban University of Technology": "https://www.dut.ac.za/apply/",
  "Mangosuthu University of Technology": "https://www.mut.ac.za/apply/",
  "University of KwaZulu-Natal": "https://applications.ukzn.ac.za",
  "University of Zululand": "https://www.unizulu.ac.za/apply/",

  // Eastern Cape
  "Nelson Mandela University": "https://applyonline.mandela.ac.za",
  "Rhodes University": "https://ross.ru.ac.za",
  "University of Fort Hare": "https://www.ufh.ac.za/apply/",
  "Walter Sisulu University": "https://www.wsu.ac.za/apply/",

  // Free State
  "University of the Free State": "https://apply.ufs.ac.za",
  "Central University of Technology": "https://www.cut.ac.za/apply/",

  // Gauteng
  "University of Johannesburg": "https://www.uj.ac.za/apply",
  "University of Pretoria": "https://www.up.ac.za/online-application",
  "University of the Witwatersrand": "https://www.wits.ac.za/applications/",
  "Tshwane University of Technology": "https://www.tut.ac.za/apply/",
  "Sefako Makgatho Health Sciences University": "https://www.smu.ac.za/apply/",
  "Vaal University of Technology": "https://www.vut.ac.za/apply/",

  // North West
  "North-West University": "https://apply.nwu.ac.za",

  // Limpopo
  "University of Limpopo": "https://www.ul.ac.za/apply/",
  "University of Venda": "https://www.univen.ac.za/apply/",

  // Mpumalanga
  "University of Mpumalanga": "https://www.ump.ac.za/apply/",

  // Northern Cape
  "Sol Plaatje University": "https://www.spu.ac.za/apply/"
};


// Array of Orientation video IDs
orientationMap: { [key: string]: string } = {
  // Western Cape
  "Cape Peninsula University of Technology": "wrYrFud8t5Q",
  "University of Cape Town": "B-yL90W83EE",
  "University of the Western Cape": "PAL6p_xSV0Q",
  "Stellenbosch University": "x9KOA7i11MI",

  // KwaZulu-Natal
  "Durban University of Technology": "GCKC-i3-yek",
  "Mangosuthu University of Technology": "OV0iMIpj3z0",
  "University of KwaZulu-Natal": "DJEn8F3u0iQ",
  "University of Zululand": "",

  // Eastern Cape
  "Nelson Mandela University": "J1SUN0tU1IA",
  "Rhodes University": "WKaBokzYKJ8",
  "University of Fort Hare": "T4fJGMgIU4k",
  "Walter Sisulu University": "6SrsFSXlQag",

  // Free State
  "University of the Free State": "WXH32qKrsDc",
  "Central University of Technology": "UyYwGUTS93k",

  // Gauteng
  "University of Johannesburg": "b6vRZ6hlZZk",
  "University of Pretoria": "FmqAw2HBatk",
  "University of Witwatersrand": "MPF-PlDDRMM",
  "Tshwane University of Technology": "_XKb3aRT_kI",
  "Sefako Makgatho Health Sciences University": "Kcb4SJyRtyM",
  "Vaal University of Technology": "GQZckHBhj3U",

  // North West
  "North-West University": "GQZckHBhj3U",

  // Limpopo
  "University of Limpopo": "ks088Yh_B34",
  "University of Venda": "uXyBotVdHk8",

  // Mpumalanga
  "University of Mpumalanga": "EbaNsc0j-Vk",

  // Northern Cape
  "Sol Plaatje University": "1zgrxu6a1Uw"
};

bursaryMap: { [key: string]: string } = {
  // Western Cape
  "Cape Peninsula University of Technology": "https://www.cput.ac.za/study/funding",
  "University of Cape Town": "https://www.uct.ac.za/apply/funding",
  "University of the Western Cape": "https://www.uwc.ac.za/study/funding",
  "Stellenbosch University": "https://www.sun.ac.za/english/maties/Pages/Funding.aspx",

  // KwaZulu-Natal
  "Durban University of Technology": "https://www.dut.ac.za/student_portal/bursaries/",
  "Mangosuthu University of Technology": "https://www.mut.ac.za/student-support/student-funding/",
  "University of KwaZulu-Natal": "https://studentfunding.ukzn.ac.za/",
  "University of Zululand": "https://www.unizulu.ac.za/student-funding/",

  // Eastern Cape
  "Nelson Mandela University": "https://www.mandela.ac.za/Study-at-Mandela/Student-Funding",
  "Rhodes University": "https://www.ru.ac.za/studentfees/bursariesandscholarships/",
  "University of Fort Hare": "https://www.ufh.ac.za/financial-aid/",
  "Walter Sisulu University": "https://www.wsu.ac.za/student-support/student-financial-aid/",

  // Free State
  "University of the Free State": "https://www.ufs.ac.za/student-finance",
  "Central University of Technology": "https://www.cut.ac.za/student-support/student-financial-aid/",

  // Gauteng
  "University of Johannesburg": "https://www.uj.ac.za/funding",
  "University of Pretoria": "https://www.up.ac.za/funding",
  "University of the Witwatersrand": "https://www.wits.ac.za/financialaid",
  "Tshwane University of Technology": "https://www.tut.ac.za/students/Pages/Bursaries.aspx",
  "Sefako Makgatho Health Sciences University": "https://www.smu.ac.za/student-support/student-financial-aid/",
  "Vaal University of Technology": "https://www.vut.ac.za/student-support/student-financial-aid/",

  // North West
  "North-West University": "https://studies.nwu.ac.za/student-finance",

  // Limpopo
  "University of Limpopo": "https://www.ul.ac.za/index.php?entity=financial_aid",
  "University of Venda": "https://www.univen.ac.za/student-support/student-financial-aid/",

  // Mpumalanga
  "University of Mpumalanga": "https://www.ump.ac.za/Pages/Funding.aspx",

  // Northern Cape
  "Sol Plaatje University": "https://www.spu.ac.za/funding/"
};

applicationDates: { [key: string]: string } = {
  // Western Cape
  "Cape Peninsula University of Technology": "2026-05-01 to 2026-09-30",
  "University of Cape Town": "2026-04-01 to 2026-07-31",
  "University of the Western Cape": "2026-05-01 to 2026-09-30",
  "Stellenbosch University": "2026-04-01 to 2026-07-31",

  // KwaZulu-Natal
  "Durban University of Technology": "2026-05-01 to 2026-09-30",
  "Mangosuthu University of Technology": "2026-05-01 to 2026-09-30",
  "University of KwaZulu-Natal": "2026-04-01 to 2026-09-30",
  "University of Zululand": "2026-05-01 to 2026-09-30",

  // Eastern Cape
  "Nelson Mandela University": "2026-05-01 to 2026-09-30",
  "Rhodes University": "2026-04-01 to 2026-08-31",
  "University of Fort Hare": "2026-05-01 to 2026-09-30",
  "Walter Sisulu University": "2026-05-01 to 2026-09-30",

  // Free State
  "University of the Free State": "2026-04-01 to 2026-09-30",
  "Central University of Technology": "2026-05-01 to 2026-09-30",

  // Gauteng
  "University of Johannesburg": "2026-04-01 to 2026-09-30",
  "University of Pretoria": "2026-04-01 to 2026-06-30",
  "University of the Witwatersrand": "2026-04-01 to 2026-06-30",
  "Tshwane University of Technology": "2026-05-01 to 2026-09-30",
  "Sefako Makgatho Health Sciences University": "2026-05-01 to 2026-09-30",
  "Vaal University of Technology": "2026-05-01 to 2026-09-30",

  // North West
  "North-West University": "2026-04-01 to 2026-09-30",

  // Limpopo
  "University of Limpopo": "2026-05-01 to 2026-09-30",
  "University of Venda": "2026-05-01 to 2026-09-30",

  // Mpumalanga
  "University of Mpumalanga": "2026-06-01 to 2026-09-30",

  // Northern Cape
  "Sol Plaatje University": "2026-05-01 to 2026-09-30"
};


//Requirements


OrientationVid(varsity: string) {
    this.firstSub = true;
    this.secondVarsities = true;
    this.thirdApply = false;
    this.varsityName = varsity;
    this.updateBursaryLink(varsity);
    this.RequirementVid(varsity); 
    this.updateApply(varsity);

    const videoId = this.orientationMap[varsity];
    if (videoId) {
      const fullUrl = this.vasReqLink + videoId;
      // Sanitize the URL before assigning it
      this.OrientVarsity = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
    } else {
      console.log("No video found for:", varsity);
    }
  }

  RequirementVid(varsity: string) {
    const videoId = this.orientationMap[varsity];
    if (videoId) {
      const fullUrl = this.vasReqLink + videoId;
      // Sanitize the URL here as well
      this.RequestVarsity = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
    } else {
      console.log("No video found for:", varsity);
    }
  }

updateBursaryLink(varsity: string) {
  console.log(this.startDate);
  const bursaryUrl = this.bursaryMap[varsity];
  if (bursaryUrl) {
    this.currentBursaryLink = bursaryUrl;
  } else {
    console.log("No bursary link found for:", varsity);
    this.currentBursaryLink = null;
  }
}
updateApply(varsity: string) {
  const applicationUrl = this.applicationMap[varsity];
  if (applicationUrl) {
    this.currentApply = applicationUrl;
  } else {
    console.log("No application link found for:", varsity);
    this.currentApply = null;
  }
}


Application(){

  
}
Subscribe(email:string){
    
  if(email){
    console.log(email !== "" && email.slice(-9) === "gmail.com");
  this.firstSub = true;
  this.secondVarsities = false;
  this.thirdApply = true;
    window.open("https://www.youtube.com/@Honorableking99?sub_confirmation=1", "_blank");
  }
    else{
       this.firstSub = false;
  this.secondVarsities = true;
  this.thirdApply = true;
    }
    
}





}
