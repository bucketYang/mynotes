import Vue, { ComponentOptions } from 'vue';
import { VueClass } from './declarations';
export { createDecorator } from './util';
declare function Component<V extends Vue>(options: ComponentOptions<any, any, any, any> & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC;
declare function Component<VC extends VueClass<Vue>>(target: VC): VC;
declare namespace Component {
    function registerHooks(keys: string[]): void;
}
export default Component;