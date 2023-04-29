from rest_framework import viewsets

from main.models import Contact
from main.serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

    def get_queryset(self):
        user = self.request.GET.get('user')
        queryset = super().get_queryset()
        if user:
            queryset = queryset.filter(user=user)
        return queryset.order_by('-id')