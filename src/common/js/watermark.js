/**
 * 
 * @param {Element} dom 
 * @param {String} text 
 * @param {Number} rotate 标准坐标轴角度
 * @param {String} color 
 * @param {Number} fontSize 
 * @param {Number} gap 水平间距
 */

const watermark = (
    dom = document.getElementById('watermark'),
    text = '水印',
    rotate = 20,
    color = '#CCCDCF',
    fontSize = 12,
    gap = 130
) => {
    const body = document.getElementsByTagName('body')[0]
    const bodyWidth = body.clientWidth
    const bodyHeight = body.clientHeight
    dom.width = bodyWidth
    dom.height = bodyHeight
    dom.style.position = 'absolute'
    dom.style.left = 0
    dom.style.top = 0
    dom.style.opacity = 0.4
    dom.style['pointer-events'] = 'none'
    const ctx = dom.getContext('2d')
    ctx.font = `${fontSize}px 'PingFang SC'`
    ctx.fillStyle = color;
    let horizontalWidth = ctx.measureText(text).width
    horizontalWidth = Math.sqrt(horizontalWidth * horizontalWidth / 2) + fontSize
    
    const draw = (x, y) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-rotate / 180 * Math.PI);
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }

    const width = dom.width
    const height = dom.height
    let row = 0
    for (let i = 0; i < width; i += horizontalWidth + gap) {
        row = 0
        for (let j = 0; j < height; j += horizontalWidth + gap/2) {
            row++
            if (row % 2 == 0) {
                i = i + horizontalWidth
            } else {
                i = i - horizontalWidth
            }
            draw(i, j)
        }
    }
}

module.exports = watermark