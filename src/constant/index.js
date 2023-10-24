/** @type {*} 时间段选项 */
export const timeQuantumOptions = [
    {
      label: '全部时间',
      value: '全部时间'
    },
    {
      label: '近一年',
      value: '近一年'
    },
    {
      label: '近三年',
      value: '近三年'
    },
    {
      label: '近六年',
      value: '近六年'
    }
  ]
  
  /** @type {*} 国家选项 */
  export const countryOptions = [
    {
      label: '全球',
      value: '全球'
    },
    {
      label: '美国',
      value: '美国'
    },
    {
      label: '英国',
      value: '英国'
    },
    {
      label: '法国',
      value: '法国'
    },
    {
      label: '加拿大',
      value: '加拿大'
    },
    {
      label: '澳大利亚',
      value: '澳大利亚'
    },
    {
      label: '德国',
      value: '德国'
    },
    {
      label: '印度',
      value: '印度'
    },
    {
      label: '爱尔兰',
      value: '爱尔兰'
    },
    {
      label: '新加坡',
      value: '新加坡'
    },
    {
      label: '巴基斯坦',
      value: '巴基斯坦'
    }
  ]
  
  /** @type {*} 汉语传播表格 */
  export const chineseTableColumns = [
    {
      label: '国家',
      prop: 'country',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '关键词',
      prop: 'keyword',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '整体月均值',
      prop: 'overallMonthlyAverage',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '月均值1',
      prop: 'monthlyAverage1',
      show: ['近三年', '近六年']
    },
    {
      label: '月均值2',
      prop: 'monthlyAverage2',
      show: ['近三年', '近六年']
    },
    {
      label: '环比增长率',
      prop: 'yearOnYearGrowthRate2',
      show: ['近六年']
    },
    {
      label: '月均值3',
      prop: 'monthlyAverage3',
      show: ['近三年', '近六年']
    },
    {
      label: '环比增长率',
      prop: 'yearOnYearGrowthRate3',
      show: ['近六年']
    },
    ,
    {
      label: '月均值4',
      prop: 'monthlyAverage4',
      show: ['近六年']
    },
    {
      label: '环比增长率',
      prop: 'yearOnYearGrowthRate4',
      show: ['近六年']
    },
    ,
    {
      label: '月均值5',
      prop: 'monthlyAverage5',
      show: ['近六年']
    },
    {
      label: '环比增长率',
      prop: 'yearOnYearGrowthRate5',
      show: ['近六年']
    },
    ,
    {
      label: '月均值6',
      prop: 'monthlyAverage6',
      show: ['近六年']
    },
    {
      label: '环比增长率',
      prop: 'yearOnYearGrowthRate6',
      show: ['近六年']
    },
    {
      label: '最高值月份',
      prop: 'highestMonth',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '最高值',
      prop: 'highestValue',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '最低值月份',
      prop: 'lowestMonth',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '最低值',
      prop: 'lowestValue',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '中位数',
      prop: 'median',
      show: ['近一年', '近三年', '近六年']
    }
  ]
  
  /** @type {*} 媒体类型 */
  export const mediaTypeOptions = [
    {
      label: '个人',
      value: 'personal'
    },
    {
      label: '媒体',
      value: 'media'
    },
    {
      label: '政府',
      value: 'government'
    },
    {
      label: '企业',
      value: 'enterprise'
    }
  ]
  
  /** @type {*} 汉语传播表格 */
  export const studyTableColumns = [
    {
      label: '时间',
      prop: 'yearName',
      show: ['近三年', '近六年']
    },
    {
      label: '国家',
      prop: 'country',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '关键词',
      prop: 'keyword',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '整体月均值',
      prop: 'overallMonthlyAverage',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '月均值环比增长率',
      prop: 'yearOnYearGrowthRate',
      show: ['近三年', '近六年']
    },
  
    {
      label: '最高值月份',
      prop: 'highestMonth',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '最高值',
      prop: 'highestValue',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '最低值月份',
      prop: 'lowestMonth',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '最低值',
      prop: 'lowestValue',
      show: ['近一年', '近三年', '近六年']
    },
    {
      label: '中位数',
      prop: 'median',
      show: ['近一年', '近三年', '近六年']
    }
  ]
  
  /** @type {*} 数据表格 */
  export const importTableColumns = [
    {
      label: 'id',
      prop: 'id',
      show: ['1', '2', '3']
    },
    {
      label: '指数',
      prop: 'index',
      show: ['1', '2', '3']
    },
    {
      label: '国家',
      prop: 'country',
      show: ['1', '2', '3']
    },
    {
      label: '年份',
      prop: 'year',
      show: ['1', '2', '3']
    },
    {
      label: '月份',
      prop: 'month',
      show: ['1', '2', '3']
    },
    {
      label: '搜索关注度',
      prop: 'data',
      show: ['1']
    },
    {
      label: '社交媒体关注度',
      prop: 'data',
      show: ['2']
    },
    {
      label: '社交媒体态度',
      prop: 'data',
      show: ['3']
    },
    {
      label: '推文ID',
      prop: 'tweetId',
      show: ['4']
    },
    {
      label: '推文内容',
      prop: 'text',
      show: ['4']
    },
    {
      label: '推文发布时间',
      prop: 'tweetCreatedAt',
      // formatter: row => {
      //   return row.tweetCreatedAt ? dayjs(row.tweetCreatedAt).format('YYYY-MM-DD HH:mm:ss') : ''
      // },
      show: ['4']
    },
    {
      label: '转发数',
      prop: 'rtCount',
      show: ['4']
    },
    {
      label: '喜欢数',
      prop: 'likeCount',
      show: ['4']
    },
    {
      label: '回复数',
      prop: 'replyCount',
      show: ['4']
    },
    {
      label: '引用数',
      prop: 'quoteCount',
      show: ['4']
    },
    {
      label: '指数',
      prop: 'newclass',
      show: ['4']
    },
    {
      label: '情感极性',
      prop: 'polarity',
      formatter: row => {
        return Number(row.polarity).toFixed(1)
      },
      show: ['4']
    },
    {
      label: '用户ID',
      prop: 'userId',
      show: ['4']
    },
    {
      label: '粉丝数',
      prop: 'followersCount',
      show: ['4']
    },
    {
      label: '关注数',
      prop: 'followingCount',
      show: ['4']
    },
    {
      label: '所在城市',
      prop: 'city',
      show: ['4']
    },
    {
      label: '所在国家',
      prop: 'country',
      show: ['4']
    }
  ]
  
  /** @type {*} 指数选项 */
  export const indexOptions = [
    {
      label: '汉语学习',
      value: '汉语学习'
    },
    {
      label: 'HSK考试',
      value: 'HSK考试'
    },
    {
      label: '来华留学',
      value: '来华留学'
    },
    {
      label: '政治',
      value: '政治'
    },
    {
      label: '经济',
      value: '经济'
    },
    {
      label: '科技',
      value: '科技'
    },
    {
      label: '社会',
      value: '社会'
    },
    {
      label: '娱乐',
      value: '娱乐'
    },
    {
      label: '生活',
      value: '生活'
    },
    {
      label: '军事',
      value: '军事'
    },
    {
      label: '健康',
      value: '健康'
    },
    {
      label: '教育',
      value: '教育'
    }
  ]
  
  /** @type {*} 推文国家 */
  export const tweetCountries = [
      {
      label: 'global',
      value: 'global'
    },
    {
      label: 'The United States (US)',
      value: 'The United States (US)'
    },
    {
      label: 'The United Kingdom (UK)',
      value: 'The United Kingdom (UK)'
    },
    {
      label: 'French Republic (FR)',
      value: 'French Republic (FR)'
    },
    {
      label: 'Canada (CA)',
      value: 'Canada (CA)'
    },
    {
      label: 'Commonwealth of Australia (AU)',
      value: 'Commonwealth of Australia (AU)'
    },
    {
      label: 'Federal Republic of Germany (DE)',
      value: 'Federal Republic of Germany (DE)'
    },
    {
      label: 'Republic of India (IN)',
      value: 'Republic of India (IN)'
    },
    {
      label: 'Ireland (IE)',
      value: 'Ireland (IE)'
    },
    {
      label: 'Republic of Singapore (SG)',
      value: 'Republic of Singapore (SG)'
    },
    {
      label: 'Pakistan',
      value: 'Pakistan'
    }
  ]
  
  /** @type {*} 推文指数 */
  export const tweetIndexOptions = [
    {
      label: '汉语学习',
      value: '汉语学习'
    },
    {
      label: 'HSK考试',
      value: 'HSK考试'
    },
    {
      label: '来华留学',
      value: '来华留学'
    },
    {
      label: '政治',
      value: '3'
    },
    {
      label: '经济',
      value: '4'
    },
    {
      label: '科技',
      value: '6'
    },
    {
      label: '社会',
      value: '1'
    },
    {
      label: '娱乐',
      value: '2'
    },
    {
      label: '生活',
      value: '9'
    },
    {
      label: '军事',
      value: '5'
    },
    {
      label: '健康',
      value: '7'
    },
    {
      label: '教育',
      value: '8'
    },
  
  ]
  