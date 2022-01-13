const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin    = require('copy-webpack-plugin');

const cssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


module.exports = {


    //mode es para elegir el modo de desarrollo o produccion
          mode: "production",

          output:{
              clean:true,
              filename:'main.[contenthash].js'
          },
          module:{
              rules:[
                  {
                      test: /\.html$/i,
                      loader: 'html-loader',
                      options: {
                          sources:false
                 }

              },{

                 test : /\.css$/,
                 exclude: /styles.css$/,
                 use: ['style-loader','css-loader']   
            },

            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader,'css-loader']
            },
            {
                test: /\.(png|jpg?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
            ]
          },

          optimization:{
              minimize: true,
              minimizer:[
                  new cssMinimizer(),
                  new Terser()
              ]
          },

          plugins:[
              new HtmlWebPack(
                  {
                      title: 'WebOnline',
                      template: './src/index.html'

                  }
              ),
              new MiniCssExtract({
                  filename: '[name].[fullhash].css'
              }),
              new CopyPlugin({
                  patterns:[
                    {from:'src/assets/', to: 'assets/'}
                  ]
                 
              })
          ]
          

}
