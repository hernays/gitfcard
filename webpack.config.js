const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin    = require('copy-webpack-plugin');

module.exports = {


    //mode es para elegir el modo de desarrollo o produccion
          mode: 'development',

          output:{
              clean:true
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
            }
            ]
          },

          optimization:{},

          plugins:[
              new HtmlWebPack(
                  {
                      title: 'WebOnline',
                      template: './src/index.html'

                  }
              ),
              new MiniCssExtract({
                  filename: '[name].css'
              }),
              new CopyPlugin({
                  patterns:[
                    {from:'src/assets/', to: 'assets/'}
                  ]
                 
              })
          ]
          

}
