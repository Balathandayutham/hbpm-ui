import {  AfterContentInit,  Component,  OnInit,  ElementRef,  OnDestroy,  ViewChild,  SimpleChanges } from '@angular/core';
import * as BpmnJS from 'bpmn-js/dist/bpmn-viewer.production.min.js';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-workflow',
  templateUrl: './view-workflow.component.html',
  styleUrls: ['./view-workflow.component.css']
})
export class ViewWorkflowComponent implements AfterContentInit, OnDestroy {
public id : string;
public ver : string;
public isSelected : boolean;
  /*
  private bpmnJS: BpmnJS;
  // get this value from parent component @Input()
  private url: string = '/assets/view-workflow.bpmn';

  @ViewChild('ref') private el: ElementRef;

  constructor(private http: HttpClient) {
    this.bpmnJS = new BpmnJS({
      width: '100%',
      height: '400px'
    }
    );
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
    this.loadUrl(this.url);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  loadUrl(url: string) {
    this.http.get(url, { responseType: 'text' }).subscribe(
      (xml) => {

        this.bpmnJS.importXML(xml, function (err, warnings) {
          if (err) {
            console.log('error during import')
          } else {
            console.log('xml import done');
          }
        }
        )
      }
    )
  }
 */

  private bpmnViewer :BpmnViewer; 
  private url: string = '/assets/view-workflow.bpmn';
  @ViewChild('ref') private el: ElementRef;
  
  constructor(private http: HttpClient,private router : ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.id=params[0];
      this.ver=params[1];
      
    });
    this.bpmnViewer = new BpmnViewer(
      {
        width: '100%',
        height: '400px'
      }
    );
  }

  ngAfterContentInit(): void {
    this.bpmnViewer.attachTo(this.el.nativeElement);
    this.loadUrl(this.url);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnViewer.destroy();
  }

  loadUrl(url:string):void{
    var noteHtml = `<div class="numberCircle" 
                      style="margin-top:-10px;margin-left:-10px;color:red;border-radius:50%;width: 25px; height: 25px;text-align: center;background:red;color:white;">
                        5
                    </div>` ;

    var overlays = this.bpmnViewer.get('overlays');
    let params = new HttpParams();
    params = params.append('workflowId', this.id);
      params = params.append('version',this.ver );
    let headers =new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append("Referrer-Policy", "no-referrer");
    this.http.get("http://localhost:8082/hbpm/process/workflow/{workflowId}/version/{version}?",{params,headers, responseType: 'text' }).subscribe(
      
      (xml) => {
        console.log(xml);
        this.bpmnViewer.importXML(xml, function (err) {
          if (err) {
            return console.error('could not import BPMN 2.0 diagram', err);
          }
          
          // attach an overlay to a node
          overlays.add('SCAN_OK', 'note', {
            position: {
              bottom: 0,
              right: 0
            },
            html: noteHtml
          });

          // configure scale={ min: 1 } to use non-shrinking overlays
          overlays.add('sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9', 'note', {
            position: {
              bottom: 0,
              right: 0
            },
            scale: { min: 1 },
            html: noteHtml
          });
    
        })
      }
    )
  }


}
