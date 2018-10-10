import { SmartContenteditableDemoModule } from './smart-contenteditable-demo.module';

describe('SmartContenteditableDemoModule', () => {
  let smartContenteditableDemoModule: SmartContenteditableDemoModule;

  beforeEach(() => {
    smartContenteditableDemoModule = new SmartContenteditableDemoModule();
  });

  it('should create an instance', () => {
    expect(smartContenteditableDemoModule).toBeTruthy();
  });
});
