const webpack = require('webpack');
const path = require('path');

const resolve = dir => {
	return path.join(__dirname,dir);
};

module.exports = {
	// 输出路径
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js',
		path: path.resolve(__dirname,'../dist'),
	},
	module: {
		rules: [
			{
		        test: /\.css$/,
		        use: [
		            'style-loader',
		            'css-loader',
		            'postcss-loader'
		        ],
		     },
		     {
		        test: /\.less/,
		        use: [
		            'style-loader',
		            'css-loader',
		            {
					    loader: 'postcss-loader',
					    options: {
						    config: {
						        path: 'postcss.config.js',
						    },
					    },
					},
		            'less-loader'
		        ],
		    },
			{
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        use: [
			        {
			            loader: 'babel-loader',
			            options: {
			                presets: ['env'],
			                // 防止在每个文件都插入辅助代码
			                plugins: ['transform-runtime'],
			            },
			        }
		        ],
		    },
		    {
		        test: /\.(jpg|png|gif|svg|jpeg)$/,
		        use: [
		            {
		            	loader: 'url-loader',
	            		options: { 
		                	limit: 1024 ,
	            		},
		            }
		        ]
		    },
		    {
		        test: /\.(woff|woff2|eot|ttf|otf)$/,
		        use: [
		            {
		            	loader:'file-loader',
		            	options:{
		                	name:'img/[name].[hash:8].[ext]',
		            	},
		            }
		        ]
		    }
		],
	},
	// 创建路径别名
	resolve: {
		alias: {
			'@': resolve('../src'),
		}
	},
	// 配置优化
	optimization: {
		// 用于分离公共js模块
		splitChunks: {
			chunks: 'all',
			name: 'common'
		}
	},
	// 插件列表
	plugins: [],
};