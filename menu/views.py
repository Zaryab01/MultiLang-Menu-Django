from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


def menu_view(request):
    """Render the main menu page"""
    return render(request, 'menu/menu.html')


def checkout_view(request):
    """Render the checkout page"""
    return render(request, 'menu/checkout.html')


@csrf_exempt
def process_order(request):
    """Handle order processing (API endpoint)"""
    if request.method == 'POST':
        try:
            order_data = json.loads(request.body)

            # Here you would typically:
            # 1. Validate the order data
            # 2. Save to database
            # 3. Send confirmation email
            # 4. Integrate with payment processor
            # 5. Send to kitchen/POS system

            # For now, just return a success response
            order_number = f"DM-{order_data.get('timestamp', '').replace(':', '').replace('-', '').replace('.', '')[-6:]}"

            response_data = {
                'success': True,
                'order_number': order_number,
                'message': 'Order received successfully',
                'estimated_time': '30-45 minutes' if order_data.get('customer', {}).get(
                    'orderType') == 'delivery' else '15-20 minutes'
            }

            return JsonResponse(response_data)

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'error': 'Invalid JSON data'}, status=400)
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return JsonResponse({'success': False, 'error': 'Method not allowed'}, status=405)


def api_menu(request):
    """API endpoint to get menu data"""
    # This could return the menu data as JSON for API consumers
    return JsonResponse({
        'success': True,
        'message': 'Menu API endpoint - implement as needed'
    })