// TypeScript Version: 3.0
/// <reference types="node" />
interface RenderforestInput {
  [name: string]: string | number | boolean;
}
declare class RenderforestClient {
  constructor(options: any);

  getTemplateAvailableFonts(templateId: number): any;
  getProjectData(projectId: number): any;
  getScreenSnapshot(data: RenderforestInput): any;
  getProjects(params: RenderforestInput): any;
  addProject(templateId: number): any;
  static getTrialProject(templateId: number, presetId?: number): any;
  getProject(projectId: any): any;
  updateProjectPartial(projectId: number, params: RenderforestInput): any;
  deleteProject(projectId: any): any;
  deleteProjectVideos(projectId: number, quality: number): any;
  duplicateProject(projectId: number): any;
  renderProject(projectId: number, params: RenderforestInput): any;
  getRenderingStatus(callback: (error: any, percentage: any) => any): any;
  getSounds(params: RenderforestInput): any;
  getRecommendedSounds(templateId: number, params: RenderforestInput): any;
  addSupportsTicket(params: RenderforestInput): any;
  getCurrentUser(): any;
  static getCompanySoundsLimited(params: RenderforestInput): any;
  static getRecommendedSoundsLimited(
    templateId: number,
    params: RenderforestInput
  ): any;
  static getTemplates(params: RenderforestInput): any;
  static getTemplatesCategories(params: RenderforestInput): any;
  static getTemplate(templateId: number, params: RenderforestInput): any;
  static getTemplateColorPresets(templateId: number): any;
  static getTemplatePluggableScreens(templateId: number): any;
  static getTemplateRecommendedCustomColors(templateId: number): any;
  static getTemplateSVGContent(templateId: number): any;
  static getTemplatePresets(templateId: any): any;
  static getTemplateTheme(templateId: number): any;
  static getTemplateTransitions(templateId: number): any;
}

export default RenderforestClient;
