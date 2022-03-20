
import ICConstant from "../other/ICConstant";
/**
 * 跳绳数据
 */
class ICSkipData {

    /**
     是否稳定
     */
    isStabilized = false;

    /**
     * 测量时间，单位:秒
     */
    time = 0;

    /**
     * 跳绳模式
     */
    mode = ICConstant.ICSkipMode.ICSkipModeFreedom;

    /**
     * 设置的参数
     */
    setting = 0;

    /**
     * 跳绳使用的时间
     */
    elapsed_time = 0;

    /**
     * 跳的次数
     */
    skip_count = 0;

    /**
     * 平均频次
     */
    avg_freq = 0;

    /**
     * 最快频次
     */
    fastest_freq = 0;

    /**
     * 热量消耗
     */
    calories_burned = 0;

    /**
     * 燃脂效率
     */
    fat_burn_efficiency = 0;


    /**
     * 跳绳频次数据,ICSkipFreqData
     */
    freqs = [];

    constructor() {}
}
export {ICSkipData}
