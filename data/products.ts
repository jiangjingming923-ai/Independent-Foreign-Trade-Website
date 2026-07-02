export type Locale = 'en' | 'zh';

export type Product = {
  slug: string;
  category: string;
  image: string;
  specs: string[];
  markets: string[];
  name: Record<Locale, string>;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
};

export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

export const products: Product[] = [
  {
    slug: 'industrial-fasteners',
    category: 'Hardware',
    image: '/product-fasteners.svg',
    specs: ['ISO 9001', 'OEM/ODM', 'MOQ 1,000 pcs'],
    markets: ['North America', 'Europe', 'Southeast Asia'],
    name: { en: 'Industrial Fasteners', zh: '工业紧固件' },
    summary: {
      en: 'Custom bolts, nuts and precision fastening kits for machinery exports.',
      zh: '面向机械设备出口的定制螺栓、螺母与精密紧固套件。'
    },
    description: {
      en: 'Durable carbon steel and stainless steel fasteners with flexible surface treatment, packaging and inspection options for B2B buyers.',
      zh: '耐用碳钢与不锈钢紧固件，可按 B2B 采购需求配置表面处理、包装与检验方案。'
    },
    features: {
      en: ['Salt spray tested coatings', 'Private-label packaging', 'Batch traceability reports'],
      zh: ['盐雾测试涂层', '支持品牌包装', '批次追溯报告']
    }
  },
  {
    slug: 'solar-mounting-system',
    category: 'Renewable Energy',
    image: '/product-solar.svg',
    specs: ['TUV-ready', 'Wind load 60m/s', 'Lead time 20 days'],
    markets: ['EU', 'Middle East', 'Latin America'],
    name: { en: 'Solar Mounting System', zh: '光伏支架系统' },
    summary: {
      en: 'Aluminum ground and rooftop mounting systems for solar EPC projects.',
      zh: '适用于光伏 EPC 项目的铝合金地面与屋顶支架系统。'
    },
    description: {
      en: 'Modular solar mounting components engineered for fast installation, corrosion resistance and container-efficient export packaging.',
      zh: '模块化光伏支架组件，兼顾快速安装、耐腐蚀与适合海运集装箱的出口包装。'
    },
    features: {
      en: ['Project BOM support', 'Anodized aluminum profiles', 'Installation drawings included'],
      zh: ['项目 BOM 支持', '阳极氧化铝型材', '随货安装图纸']
    }
  },
  {
    slug: 'smart-packaging-line',
    category: 'Machinery',
    image: '/product-packaging.svg',
    specs: ['CE available', 'PLC control', 'After-sales video support'],
    markets: ['Africa', 'ASEAN', 'South America'],
    name: { en: 'Smart Packaging Line', zh: '智能包装产线' },
    summary: {
      en: 'Semi-automatic packing line for food, daily chemical and light industrial goods.',
      zh: '适用于食品、日化与轻工产品的半自动包装产线。'
    },
    description: {
      en: 'A configurable packing solution covering filling, sealing, labeling and carton packing with remote commissioning support.',
      zh: '可配置灌装、封口、贴标与装箱流程，并提供远程调试支持的一体化包装方案。'
    },
    features: {
      en: ['Layout customization', 'Remote commissioning', 'Spare parts package'],
      zh: ['产线布局定制', '远程调试', '备品备件包']
    }
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
