// netlify/functions/webhook.js
exports.handler = async (event, context) => {
  try {
    // ���� Webhook ����
    const data = JSON.parse(event.body);
    console.log("�յ� Webhook ����:", data);

    // ���سɹ�푑�
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "success" }),
    };
  } catch (error) {
    // �����e�`푑�
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};