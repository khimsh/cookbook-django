from .models import Recipe
from rest_framework import viewsets, permissions
from .serializers import RecipeSerializer


# Recipe Viewset
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = RecipeSerializer
