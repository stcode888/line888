// netlify/functions/webhook.js
exports.handler = async (event, context) => {
  try {
    // 解析 Webhook 數據
    const data = JSON.parse(event.body);
    console.log("收到 Webhook 數據:", data);

    // 返回成功響應
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success" }),
    };
  } catch (error) {
    // 返回錯誤響應
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};